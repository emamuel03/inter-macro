import Image from 'next/image'
import React from 'react'
import Thumbnail from '../../components/Thumbnail'

function index() {
    return (
        <>
            <div>
                <h1>Paneles Power BI</h1>
                {/* <Thumbnail 
                    link='https://www.google.com.ar' 
                    imageLoader='D:\Documents\Proyectos\intranet\public\' 
                    imageSrc='thirteen.svg'>
                </Thumbnail> */}
                <br />

                <iframe 
                    title="Informes Ventas - Centro NEA" 
                    width="1140" 
                    height="541.25" 
                    src="https://app.powerbi.com/reportEmbed?reportId=facd63fe-c4f3-4c7d-b708-4f03369152e4&autoAuth=true&ctid=effec15b-e9b4-46ec-a1ba-b0e5715b7b60" 
                    frameborder="0" 
                    allowFullScreen="true">

                </iframe>

            </div>
        </>
    )
}

export default index