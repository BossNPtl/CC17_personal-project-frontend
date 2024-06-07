import mainBG from '../../Asset/Source/bg/Main_bg.jpg';

export function MainBG() {
    return (
        <div
            className='bg-fixed bg-no-repeat bg-center w-screen h-full'
            style={{ backgroundImage: `url(${mainBG})` }}
        >

        </div>
    )
}