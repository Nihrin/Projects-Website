import Website from './websites';

const AllWebsites = ({websites}) => {
    if (websites) {
        return(
            websites.map((website, i) => {
                if (i % 2 === 0) {
                    return(
                        <div className='row mt-5'><Website website={website} />
                        {websites[i + 1] ? (
                            <Website website={websites[i + 1]} />
                        ) : null}
                        </div>
                    );
                } 
                else {return null;}
            })
        )
    }
    return (<div>No websites can be loaded</div>);
}
 
export default AllWebsites;