interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return(
    <li>
      {/* ?? semelhante ao || porém desconsidera o 0 como valor nulo */}

      {/* links de refencia

      Operador de coalescência nula
      https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator


      Encadeamento opcional
      https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}

      {/* props.repository?.name ?? 'default'
      Significa um ternário com apenas a condição falsa */}

      <strong>{props.repository?.name ?? 'default'}</strong>
      <p>{props.repository?.description}</p>
      <a href={props.repository?.html_url}> acessar reposiotório </a>
    </li>
  )
}