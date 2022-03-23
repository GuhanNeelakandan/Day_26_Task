function Card(props) {

    return (
        <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">{props.priceData.plan}</h5>
                    <h6 class="card-price text-center">${props.priceData.price}<span class="period">/{props.priceData.period}</span></h6>
                    <hr />
                    <ul class="fa-ul">
                        {props.priceData.features.map((feature) => {
                            return (
                                <li className={`${feature.mute ? 'text-muted' : ''}`}><span className="fa-li"><i className={`${feature.accept ? 'fa fa-check' : 'fa fa-times'}`}></i></span>
                                    <strong>{feature.name1}</strong>{feature.name}
                                </li>
                            );
                        })}
                    </ul>
                    <div class="d-grid">
                        <a href="#" class="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;