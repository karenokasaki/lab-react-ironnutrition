


function Currency({setCurrency, realTimePrice}) {

    function handleCurrency(event) {
        setCurrency(event.target.value)
    }


    return ( 
        <div>
            
            <form onChange={handleCurrency} className="container">
                <select className="dropdown-content">
                    <option value='USD'>U$ Dolar </option>
                    <option value='BRL'>R$ Real </option>
                    <option value='CUP'>$MN Cuban Peso </option>
                    <option value='ARS'>$AR Argentine Peso </option>
                </select>
                <h4>Valor em tempo real em USD U${realTimePrice}</h4>
            </form>

        </div>
    );
}

export default Currency;