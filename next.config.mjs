import TerserPlugin from 'terser-webpack-plugin'; // Asegúrate de importar TerserPlugin

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.wixstatic.com'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Configuración específica del cliente
      config.optimization.minimize = true;
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Eliminar console.log en producción
            },
          },
        }),
      ];
    }

    return config; // Asegúrate de devolver la configuración
  },
};

// module.exports = {
//     pageExtensions: ['jsx'],
//   };

export default nextConfig;
