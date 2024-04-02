import Image from "next/image";

export default function topBoxStats() {
    const currentPendency: number = 0;    
    const benches: number = 0;    
    const institution: number = 0;    
    const disposal: number = 0;    
    const scheduledHearings: number = 0;

    return (
        <section className="section Current-Pendency topBoxStats">
                <div className="row">
                    <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <Image 
                                src="/icon/Icon.svg"
                                width={60}
                                height={60} 
                                alt="Current Pendency"    
                            />
                        <p>Current Pendency</p>
                        <h3 id="currentPendency">
                            {currentPendency}
                        </h3>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <Image 
                                src="/icon/Icon-1.svg"
                                width={60}
                                height={60} 
                                alt="Benches"    
                            />
                            <p>Benches</p>
                            <h3 id="benches">
                                {benches}
                            </h3>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <Image 
                                src="/icon/Icon-2.svg"
                                width={60}
                                height={60}  
                                alt="Institution"    
                            />
                            <p>Institution</p>
                            <h3 id="institution">
                                {institution}
                            </h3>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <Image 
                                src="/icon/Icon-3.svg"
                                width={60}
                                height={60}  
                                alt="Disposal"    
                            />
                            <p>Disposal</p>
                            <h3 id="disposal">
                                {disposal}
                            </h3>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <Image 
                                src="/icon/Icon-4.svg"
                                width={60}
                                height={60}  
                                alt="Scheduled Hearings"    
                            />
                            <p>Scheduled Hearings</p>
                            <h3 id="scheduledHearings">
                                {scheduledHearings}
                            </h3>
                        </div>
                    </div>
                    </div>

                </div>
            </section>
    );
}