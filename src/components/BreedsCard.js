import { Link } from "react-router-dom"

export const BreedsCard = ({name}) => {
  return (
    <div className="col">
        <div className="card">
            <div className="row no-gutters" > 
                <div className="col-12">
                    <div className="box p-4">
                        <p className="card-text">{name.toString().toLocaleUpperCase()}</p>
                        <Link className="btn btn-outline-info" to={`/breeds/${name}`} >
                            {'Ver Imagenes >'} 
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
