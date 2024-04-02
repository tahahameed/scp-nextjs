import Filter from "@/app/ui/components/filter";
import TopBoxStats from "@/app/ui/components/topBoxStats";

export default function Page() {

    return (
        <>
            <Filter detailedStats="true"></Filter>
            <TopBoxStats></TopBoxStats>

            <section className="section Current-Pendency">
                <div className="row">
                <div className="col-md-12">
                    <div className="card">
                    <div className="card-body">
                        <figure className="highcharts-figure">
                        <div id="Pendency_Trend"></div>  
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
                        <div id="Case_Institution"></div>  
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
                            <div id="CurrentPendencyInstitutionYear"></div>  
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
                            <div id="unripeCasesChart"></div>  
                        </figure>            
                        </div>
                        </div>
                    </div>       
                </div>

                <div className="row">
                
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-body">
                        <figure className="highcharts-figure">
                        <div id="pendingPetitions"></div>  
                    </figure>
                    
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-body">
                        <figure className="highcharts-figure">
                        <div id="pendingAppeals"></div>  
                    </figure>
                    
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                    <div className="card-body">
                        <figure className="highcharts-figure">
                        <div id="pendingReviews"></div>  
                    </figure>
                    
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
        
    );
}