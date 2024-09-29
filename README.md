# Documentaçao do projeto no link.

[https://liveestacio-my.sharepoint.com/:w:/g/personal/202303129351_alunos_estacio_br/EZBwbtCm2yZEu9gEmhnhBbsBwagLXaGmxRdD9evvtT18Pw?e=rawXdi](https://liveestacio-my.sharepoint.com/:b:/g/personal/202303129351_alunos_estacio_br/EYkWgbJ5b99OqYlSVCm9vO8BC6PsYYGdifpIOuitZMNlxw?e=NHDIHv)
#PORTUGUES

# Resumo do Projeto: Aplicação de Gestão de Fornecedores

Este projeto consiste no desenvolvimento de uma **aplicação mobile** que permite gerenciar fornecedores (fornecedores) utilizando **React Native**. Os usuários podem adicionar novos fornecedores a uma lista e visualizá-la em tempo real. Ao longo do desenvolvimento do projeto foram abordadas diversas funcionalidades importantes como navegação entre telas, gestão estadual local e visualização de dados dinâmicos em componentes interativos.

## Tecnologias usadas

1. **React Native**: A principal tecnologia para desenvolvimento de aplicativos móveis, usada para construir interfaces de usuário nativas em iOS e Android.
2. **Expo CLI**: Usado como ambiente de desenvolvimento para facilitar o processo de criação, teste e implantação do aplicativo em dispositivos móveis.
3. **React Navigation**: Para gerenciar a navegação entre telas, foi implementada a biblioteca **React Navigation**, especificamente o **Material Bottom Tab Navigator**, que proporciona uma experiência mais fluida e moderna.
4. **React Hooks**: Para gerenciamento de estado dentro de componentes (com `useState`).
5. **React Native Paper**: usado em conjunto com **react-native-vector-icons** para design visual e integração de ícones na barra de navegação.
6. **JavaScript (ES6)**: A linguagem principal na qual a aplicação foi desenvolvida.
7. **StyleSheet**: Usado para lidar com estilos de componentes de UI de maneira modular e eficiente.

## Funcionalidades Implementadas

1. **Navegação entre Telas**:
 - **Lista de Fornecedores**: Mostra uma lista dinâmica de fornecedores adicionados pelo usuário.
 - **Adicionar Novo Fornecedor**: Tela que permite adicionar um novo fornecedor à lista.
 - Foi implementada uma navegação por abas na parte inferior, utilizando o **Material Bottom Tab Navigator** do **React Navigation**, o que facilita a interação e transição entre as duas telas.

2. **Formulário para Adicionar Fornecedores**:
 - O formulário é composto por um campo de texto (`TextInput`) onde o usuário insere o nome do novo fornecedor, uma imagem ilustrativa e um botão para adicionar o fornecedor à lista.
 - Utilizado o estado local do React (`useState`) para gerenciar a entrada do usuário e atualizar a lista de fornecedores.

3. **Lista Dinâmica de Fornecedores**:
 - O componente **FlatList** foi utilizado para exibir de forma eficiente a lista de fornecedores na tela.
 - A lista é atualizada dinamicamente sempre que um novo provedor é adicionado, sem a necessidade de recarregar a página ou conectar-se a um backend.

## Detalhes técnicos importantes

1. **Comunicação entre Componentes**:
 - Passada a função `addFornecedor` do componente principal (Menu) para o componente **NovoFornecedor** como prop para tratar da adição de fornecedores. Isto garante que o status da lista de fornecedores permaneça centralizado.
 - O componente **SuppliersList** recebe como prop a lista de fornecedores, o que permite renderizar os dados de forma eficiente.

2. **Gestão Estadual**:
 - Usado `useState` para armazenar o nome do novo provedor e a lista completa de provedores.
 - Cada vez que um novo fornecedor é adicionado, o status da lista é atualizado e a visualização da lista é renderizada novamente.

3. **Estilos personalizados**:
 - Apliquei estilos personalizados a cada um dos componentes usando **StyleSheet.create()** para manter o código da UI limpo e modular.
 - Foi implementado um design visual simples, mas eficaz, com botões estilizados, uma paleta de cores minimalista e utilização de ícones visuais que melhoram a experiência do usuário.

4. **Bugs resolvidos**:
 - Resolvido bug relacionado à falta de exportação/importação correta do componente `ListaFornecedores`.
 - Também foram corrigidos bugs de navegação, garantindo que os componentes sejam renderizados corretamente dentro do `MaterialBottomTabNavigator`.

5. **Otimização de código**:
 - Foram feitas otimizações no código para reduzir redundâncias, como a criação de uma função centralizada para adicionar provedores e gerenciar o estado em um só lugar.
 - Ajustada a lógica de importação para evitar conflitos ou falhas na renderização de componentes.

## Lições aprendidas

Durante o desenvolvimento deste projeto foram reforçadas competências em:

1. **React Native e Expo**: Criação e implantação de aplicativos móveis, otimização de código e uso de bibliotecas nativas.
2. **React Hooks**: Gerenciamento de estado eficaz com `useState` e gerenciamento de prop entre componentes.
3. **Navegação em aplicações React Native**: Implementação e customização de um sistema de navegação por abas.
4. **Componentização**: Criação de componentes reutilizáveis ​​e dinâmicos, favorecendo

#ESPANHOL

# Resumen del Proyecto: Aplicación de Gestión de Fornecedores

Este proyecto consiste en el desarrollo de una **aplicación móvil** que permite gestionar proveedores (fornecedores) utilizando **React Native**. Los usuarios pueden agregar nuevos proveedores a una lista y visualizar la lista en tiempo real. A lo largo del desarrollo del proyecto, se abordaron varias funcionalidades importantes como la navegación entre pantallas, la gestión del estado local y la visualización de datos dinámicos en componentes interactivos.

## Tecnologías Utilizadas

1. **React Native**: La principal tecnología para el desarrollo de la aplicación móvil, utilizada para construir interfaces de usuario nativas en iOS y Android.
2. **Expo CLI**: Utilizado como entorno de desarrollo para facilitar el proceso de creación, prueba y despliegue de la aplicación en dispositivos móviles.
3. **React Navigation**: Para la gestión de la navegación entre pantallas, se implementó la librería **React Navigation**, específicamente el **Material Bottom Tab Navigator**, lo que proporciona una experiencia de usuario más fluida y moderna.
4. **React Hooks**: Para la gestión del estado dentro de los componentes (con `useState`).
5. **React Native Paper**: Se utilizó junto con **react-native-vector-icons** para el diseño visual y la integración de iconos en la barra de navegación.
6. **JavaScript (ES6)**: El lenguaje principal en el que se desarrolló la aplicación.
7. **StyleSheet**: Se usó para manejar los estilos de los componentes de la interfaz de usuario de manera modular y eficiente.

## Funcionalidades Implementadas

1. **Navegación entre Pantallas**:
   - **Lista de Fornecedores**: Muestra una lista dinámica de proveedores agregados por el usuario.
   - **Agregar Nuevo Fornecedor**: Pantalla que permite agregar un nuevo proveedor a la lista.
   - Se implementó una navegación con pestañas en la parte inferior, usando el **Material Bottom Tab Navigator** de **React Navigation**, lo que facilita la interacción y la transición entre ambas pantallas.

2. **Formulario para Agregar Proveedores**:
   - El formulario está compuesto por un campo de texto (`TextInput`) donde el usuario ingresa el nombre del nuevo proveedor, una imagen ilustrativa y un botón para agregar el proveedor a la lista.
   - Se utilizó el estado local de React (`useState`) para gestionar los datos ingresados por el usuario y actualizar la lista de proveedores.

3. **Lista Dinámica de Proveedores**:
   - El componente **FlatList** se utilizó para mostrar de forma eficiente la lista de proveedores en la pantalla.
   - La lista se actualiza dinámicamente cada vez que se agrega un nuevo proveedor sin necesidad de recargar la página o conectar con un backend.

## Detalles Técnicos Importantes

1. **Comunicación entre Componentes**:
   - Se pasó la función `addFornecedor` del componente principal (Menu) al componente **NovoFornecedor** como prop para manejar el agregado de proveedores. Esto garantiza que el estado de la lista de proveedores se mantenga centralizado.
   - El componente **ListaFornecedores** recibe la lista de proveedores como prop, lo que le permite renderizar los datos de forma eficiente.

2. **Gestión de Estado**:
   - Se utilizó `useState` para almacenar tanto el nombre del nuevo proveedor como la lista completa de proveedores.
   - Cada vez que un nuevo proveedor es agregado, se actualiza el estado de la lista y se re-renderiza la vista de la lista.

3. **Estilos Personalizados**:
   - Se aplicaron estilos personalizados a cada uno de los componentes utilizando **StyleSheet.create()** para mantener el código de la UI limpio y modular.
   - Se implementó un diseño visual simple pero efectivo, con botones estilizados, una paleta de colores minimalista, y uso de iconos visuales que mejoran la experiencia de usuario.

4. **Errores Resueltos**:
   - Se resolvió un error relacionado con la falta de exportación/importación correcta del componente `ListaFornecedores`.
   - También se solucionaron errores de navegación, asegurando que los componentes sean renderizados correctamente dentro del `MaterialBottomTabNavigator`.

5. **Optimización del Código**:
   - Se realizaron optimizaciones en el código para reducir redundancias, como la creación de una función centralizada para agregar proveedores y manejar el estado en un solo lugar.
   - Se ajustó la lógica de las importaciones para evitar conflictos o fallos al renderizar los componentes.

## Lecciones Aprendidas

Durante el desarrollo de este proyecto, se fortalecieron las habilidades en:

1. **React Native y Expo**: Creación y despliegue de aplicaciones móviles, optimización de código, y uso de bibliotecas nativas.
2. **React Hooks**: Gestión efectiva del estado con `useState`, y manejo de props entre componentes.
3. **Navegación en Aplicaciones React Native**: Implementación y personalización de un sistema de navegación con pestañas.
4. **Componentización**: Creación de componentes reutilizables y dinámicos, favoreciendo la escalabilidad y el mantenimiento del código.
5. **Depuración de Errores**: Resolución de problemas comunes en aplicaciones móviles, como la gestión de estado entre pantallas y errores de renderizado.

## Futuras Mejoras

1. **Persistencia de Datos**: Implementar una capa de almacenamiento local (por ejemplo, usando AsyncStorage) para que los datos de los proveedores se guarden y se mantengan tras cerrar la aplicación.
2. **Conexión a Backend**: Integrar una API para almacenar y recuperar datos desde un servidor remoto, permitiendo la sincronización de proveedores entre diferentes dispositivos.
3. **Validaciones de Formulario**: Agregar validaciones más robustas al formulario para asegurarse de que los datos ingresados sean correctos.
4. **Diseño UI Mejorado**: Optimizar el diseño de la interfaz de usuario, añadiendo animaciones y una mejor disposición de los componentes visuales.

## Conclusión

Este proyecto representa una aplicación de gestión de proveedores sencilla pero funcional, implementada con **React Native**. Se lograron todos los objetivos principales del proyecto, como la implementación de una lista dinámica y la posibilidad de agregar nuevos proveedores, todo ello sin necesidad de conexión a un backend. El proyecto puede expandirse en el futuro con funcionalidades adicionales, mejorando tanto el diseño como la infraestructura subyacente.

