// export default function JSXDemo() {
//   const elementJSX = <h1 className="titre">Bonjour JSX</h1>;

//   return (
//     <div>
//       {elementJSX}
//       <label htmlFor="champ">Entrez votre nom :</label>
//       <input id="champ" />
//     </div>
//   );
// }

export default function JSXDemo() {
    const elemntsJSX = <h1 className="titre">Bienvenue JSX</h1>;


    return (
        <div>
            {elemntsJSX}
            <label htmlFor="champ">Entrer Votre Nom :</label>
            <input id="champ"></input>
        </div>
    )
}