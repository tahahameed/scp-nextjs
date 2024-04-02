import Filter from "@/app/ui/components/filter";
import TopBoxStats from "@/app/ui/components/topBoxStats";


export default function Page() {
    
    return (
        <>
            <Filter></Filter>
            <TopBoxStats></TopBoxStats>

            <section className="section Current-Pendency">
                <div className="row">
                    <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                        <figure className="highcharts-figure">
                            <div id="Cases"></div>  
                        </figure>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                        <figure className="highcharts-figure">
                            <div id="Pendency"></div>  
                        </figure>            
                        </div>
                    </div>
                    </div>      
                </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <figure className="highcharts-figure">
                                        <div id="TotalCurrent"></div>  
                                    </figure>            
                                </div>
                            </div>
                        </div>       
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <figure className="highcharts-figure">
                                        <div id="JudgementReserved"></div>  
                                    </figure>            
                                </div>
                            </div>
                        </div>       
                    </div>
                </section>
        </>
        
    );
}