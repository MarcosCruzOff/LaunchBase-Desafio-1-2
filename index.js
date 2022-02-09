const usuario = {
  nome: 'Diego',
  empresa: {
    nome: 'Rocketseat',
    Cor: 'Roxo',
    Foco: 'Programação',
    Endereço: {
      Rua: 'Rua Guilherme Gembala',
      Número: 260
    }
  }
}

console.log(
  `A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.Endereço.Rua}, ${usuario.empresa.Endereço.Número}`
)

const objeto = {
  nome: 'marcos',
  idade: 30,
  especialidade: [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}

console.log(
  `O usuário ${objeto.nome} tem ${objeto.idade} anos e usa a tecnologia ${objeto.especialidade[1].nome} com especialidade em ${objeto.especialidade[1].especialidade}`
)
