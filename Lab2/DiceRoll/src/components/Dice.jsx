import {array} from '../helper'

function Dice({value}) {

    return (

        <div>

            <i className = {`fa-solid fa-dice-${array[value]}`}></i>

        </div>
    )
}

export default Dice;