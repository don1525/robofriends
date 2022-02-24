const Card = ({ user }) => {
    const { id, name, email} = user;
    return(
        <div className='tc bg-light-green br3 grow shadow-5
                        pa3 ma2 dib ba bw2 b--dark-red'>
            <img src={`https://robohash.org/${name}?size=200x200`} alt='card' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;