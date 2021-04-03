module.exports = {
  // Determina como o babel vai lidar em cada ambiente
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    // É possível passar configurações para cada preset do babel
    ['@babel/preset-react', {
      runtime: 'automatic'
    }]
  ]
}