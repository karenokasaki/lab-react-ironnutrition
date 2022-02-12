import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Chart from 'chart.js/auto'
import DateFilter from "./DateFilter";
import Currency from "./Currency";
import './Bitcoin.css'



function Bitcoin() {

    const [dataApi, setDataApi] = useState({
        'date': 'value'
    })

    const [link, setLink] = useState('http://api.coindesk.com/v1/bpi/historical/close.json')
    const [dia, setDia] = useState(null) //data dos valores do bitcoin {from: YYYY-MM-DD, to: YYYY-MM-DD}
    const [loading, setLoading] = useState(false)
    const [chart, setChart] = useState(null);
    const [currency, setCurrency] = useState('USD')
    /* const [minMax, setMinMax] = useState([]) */

    const [realTimePrice, setRealTimePrice] = useState('')

    /*     const [dataBRL, setDataBRL] = useState({ 'dia': 'valor' })
        const [dataCNY, setDataCNY] = useState({ 'dia': 'valor' }) */



    /*     useEffect(() => {
            axios
                .get('https://api.coindesk.com/v1/bpi/historical/close.json?currency=BRL')
                .then((response) => {
                    setDataBRL(response.data.bpi)
                })
                .catch((error) => {
                    console.log(error)
                })
            axios
                .get('https://api.coindesk.com/v1/bpi/historical/close.json?currency=CNY')
                .then((response) => {
                    setDataCNY(response.data.bpi)
                }).catch((error) => {
                    console.log(error)
                })
        }, []) */

    useEffect(() => {
        axios
            .get(`https://api.coindesk.com/v1/bpi/currentprice/USD.json`)
            .then((response) => {
                // const pathToValue = `response.data.bpi.${currency}.rate` 
                setRealTimePrice(response.data.bpi.USD.rate)
                if (currency) {
                    setLink(`http://api.coindesk.com/v1/bpi/historical/close.json?currency=${currency}`)
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [currency])



    //se o dia mudar, mudar também o link que está sendo enviado para a api
    useEffect(() => {
        if (dia !== null) {                                                        // 2020-01-01  2021-01-01
            setLink(`http://api.coindesk.com/v1/bpi/historical/close.json?start=${dia.from}&end=${dia.to}`)
        }

    }, [dia])

    //se o link mudar, mudar os parametros que estão sendo enviadas pra api
    useEffect(() => {
        setLoading(true)
        axios.get(link)
            .then(function (response) {
                setDataApi(response.data.bpi)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }, [link]);


    useEffect(() => {
        if (!loading) { // se loading for false (api já terminou de enviar as informações), renderizar o chart
            const renderChart = () => {
                const ctx = document.getElementById('instanceChart').getContext('2d');
                
                if (chart) {
                    chart.destroy();
                }
                
                const instanceChart = new Chart(
                    ctx, { //config
                    type: 'line',
                    data: {
                        labels: Object.keys(dataApi),
                        datasets: [{
                            label: "Preço Bitcoin na moeda Escolhida",
                            data: Object.values(dataApi),
                            borderColor: 'rgb(21, 114, 161)',
                            tension: 0.2
                        },
                        /* {
                            label: "Preço Bitcoin no BRASIL (valores em reais R$)",
                            data: Object.values(dataBRL),
                            borderColor: 'rgb(101, 93, 138)',
                            tension: 0.2
                        },
                        {
                            label: "Preço Bitcoin na CHINA (valores em Yuan ¥)",
                            data: Object.values(dataCNY),
                            borderColor: 'rgb(243, 197, 197)',
                            tension: 0.2
                        } */]
                    },
                }
                )
                setChart(instanceChart)
            }
            renderChart()

        }
    }, [loading, dataApi, chart])
    



    /* const ArrayMin = function (array) {
        return Math.min.apply(Math, array)
    }

    const ArrayMax = function (array) {
        return Math.max.apply(Math, array)
    } */

    return (
        <div className="bitcoin-page">
            <h1 className="title">Let's see how Bitcoin is doing!</h1>
            <div className="container-up">
                <Currency setLink={setLink} setCurrency={setCurrency} realTimePrice={realTimePrice} />
                <DateFilter setDia={setDia} />
            </div>
            <div className="graph">
                {/* <p>Valor mímimo: {ArrayMax(minMax)} / Valor máximo: {ArrayMin(minMax)}</p> */}

                {loading ? "Carregando..." : (<canvas className="graph" id="instanceChart" />)}
            </div>
            <Link className="button" to="/">Voltar</Link>
        </div>
    );
}



export default Bitcoin;