import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const COLORS = {
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  HTML: '#e34f26',
  CSS: '#1572b6',
  React: '#61dafb',
  PHP: '#777BB4',
  Java: '#007396',
  TypeScript: '#3178c6',
  Vue: '#4FC08D',
  SCSS: '#CC6699',
  EJS: '#B4CA65',
  Tailwind: '#38B2AC',
  Next: '#000000',
  Express: '#000000',
  Node: '#339933',
};

const FRAMEWORKS = ['react', 'vue', 'next', 'nuxt', 'angular', 'svelte'];
const LIBRARIES = ['tailwindcss', 'express', 'jquery', 'bootstrap'];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-bold text-gray-800">{payload[0].name}</p>
        <p className="text-gray-600">{`${payload[0].value}%`}</p>
        <p className="text-sm text-gray-500 mt-1">Repositorios: {payload[0].repos}</p>
        <p className="text-sm text-gray-500">{payload[0].type}</p>
      </div>
    );
  }
  return null;
};

const LanguageChart = () => {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGitHubData = async () => {
    try {
      const reposResponse = await fetch('https://api.github.com/users/PanditaDevCode/repos');
      if (!reposResponse.ok) {
        throw new Error(`Error fetching repos: ${reposResponse.statusText}`);
      }
      const repos = await reposResponse.json();

      const repoDataPromises = repos.map(async (repo) => {
        const langResponse = await fetch(repo.languages_url);
        if (!langResponse.ok) {
          console.warn(`Error fetching languages for ${repo.name}: ${langResponse.statusText}`);
          return { repo: repo.name, languages: {}, dependencies: {} };
        }
        const languages = await langResponse.json();

        let dependencies = {};
        try {
          const contentResponse = await fetch(`https://api.github.com/repos/PanditaDevCode/${repo.name}/contents/package.json`);
          if (contentResponse.ok) {
            const content = await contentResponse.json();
            const packageJson = JSON.parse(atob(content.content));
            dependencies = {
              ...packageJson.dependencies,
              ...packageJson.devDependencies
            };
          } else {
            console.warn(`No package.json found for ${repo.name}`);
          }
        } catch (error) {
          console.log(`Error fetching package.json for ${repo.name}:`, error);
        }

        return { repo: repo.name, languages, dependencies };
      });

      const repoData = await Promise.all(repoDataPromises);

      const techCounts = {};
      let totalBytes = 0;

      repoData.forEach(({ languages }) => {
        Object.entries(languages).forEach(([lang, bytes]) => {
          if (!techCounts[lang]) {
            techCounts[lang] = { bytes: 0, repos: 0, type: 'Lenguaje' };
          }
          techCounts[lang].bytes += bytes;
          techCounts[lang].repos += 1;
          totalBytes += bytes;
        });
      });

      repoData.forEach(({ dependencies }) => {
        Object.keys(dependencies || {}).forEach((dep) => {
          const depLower = dep.toLowerCase();
          let techName = '';

          if (FRAMEWORKS.includes(depLower)) {
            techName = dep.charAt(0).toUpperCase() + dep.slice(1);
            if (!techCounts[techName]) {
              techCounts[techName] = { bytes: totalBytes * 0.1, repos: 0, type: 'Framework' };
            }
            techCounts[techName].repos += 1;
          } else if (LIBRARIES.includes(depLower)) {
            techName = dep.charAt(0).toUpperCase() + dep.slice(1);
            if (!techCounts[techName]) {
              techCounts[techName] = { bytes: totalBytes * 0.05, repos: 0, type: 'Biblioteca' };
            }
            techCounts[techName].repos += 1;
          }
        });
      });

      const distribution = Object.entries(techCounts)
        .map(([name, data]) => ({
          name,
          value: Math.round((data.bytes / (totalBytes * 1.5)) * 100),
          repos: data.repos,
          type: data.type
        }))
        .filter(item => item.value > 0)
        .sort((a, b) => b.value - a.value);

      setChartData(distribution);
      setIsLoading(false);
    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      setError('Error al cargar los datos de GitHub');
      setIsLoading(false);
    }
  };

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="gray"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-sm font-medium"
      >
        {`${name} ${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  useEffect(() => {
    fetchGitHubData();
    const interval = setInterval(fetchGitHubData, 3600000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[500px] bg-white rounded-xl shadow-lg">
        <div className="text-xl text-gray-600">Cargando datos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[500px] bg-white rounded-xl shadow-lg">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '500px' }} className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Distribución de Tecnologías en mis Repositorios
      </h2>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
            className="focus:outline-none"
            activeIndex={-1}
            activeShape={(props) => {
              return renderCustomizedLabel({
                ...props,
                outerRadius: props.outerRadius * 1.1
              });
            }}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[entry.name] || '#8884d8'}
                className="transition-all duration-300 ease-in-out hover:opacity-80"
                style={{ outline: 'none', transform: 'scale(1)', transformOrigin: 'center' }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)';
                }}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ outline: 'none' }}
            onClick={null}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LanguageChart; 