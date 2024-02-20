import './website.css';

const Website = ({ website }) => {
    return ( 
        <div className='col-md-6 row'>
            <div className='col-md-4 image'>
                <img src={`/images/${website.picture}.png`} alt='Website' />
            </div>
            <div className='col-md-7'>
                <div className='row'>
                    <h4 className='col-md-12'>{website.application}</h4>
                </div>
                <div className='row'>
                    <h5 className='col-md-12'>{website.description}</h5>
                </div>
            </div>
        </div>
     );
}
 
export default Website;