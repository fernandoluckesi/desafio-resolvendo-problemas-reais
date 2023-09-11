/* TODO
  O componente abaixo está com problemas. Resolva o problema e explique o que tinha
  de errado e também a solução que você encontrou.

  Resposta / comentários sobre a sua solução:

  Foi necessário adicionar Fragmentos para comportar os spans. Pois o React renderiza um único elemento pai de todos, logo os spans se tornam filhos do elemento pai, que nesse caso é o fragmento. Poderia ser uma div, mas não é o mais recomendado porque introduz elemento desnecessário no DOM. E o React renderiza um único elemento pai pois facilita para manipulação de eventos e aplicar estilos de forma mais eficiente.

*/

export const Desafio1 = () => {
  return (
    <>
      <span>item 1</span>
      <span>item 2</span>
    </>
  );
};
