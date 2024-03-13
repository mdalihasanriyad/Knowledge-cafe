import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='container mx-auto flex justify-between border-b-2 items-center p-4'>
            <h1 className='text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;