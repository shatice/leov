const Titles = ({ headerTitle, title, titleSubtitle, subtitle, className}) =>  {
  return (
    <section className={ className ? 'titlesContainer' + className : 'titlesContainer'}>
      { headerTitle ? <h1 className="title">{ title }</h1> : <h3 className="title">{ title }{ titleSubtitle ? <span className="titleSubtitle">{ titleSubtitle }</span> : ''}</h3>}
      { headerTitle ? <h2 className="subtitle">{ subtitle }</h2> : <h4 className="subtitle">{ subtitle }</h4> }
    </section>
  ); 
}

export default Titles;