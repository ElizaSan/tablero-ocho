import "./AlgorithmCard.css"

type Props = {

  title: string

  description: string

  strength: string
}

export function AlgorithmCard({

  title,

  description,

  strength

}: Props){

  return (

    <div className="algorithm-card">

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <span>

        {strength}

      </span>

    </div>
  )
}