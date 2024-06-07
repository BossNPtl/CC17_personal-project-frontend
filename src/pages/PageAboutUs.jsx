import picBand2 from '../../Asset/Source/band-02.jpg'
import logoBandAlpha from '../../Asset/Source/Logo-01-Alpha_B.png'
import { FontSize, FontWeight } from '../constants/editSource'

export default function PageAboutUs() {
  return (
    <div className='w-[100%]'>
      <div
        className='h-[600px] overflow-hidden'
      >
        <img
          className='max-w-lx relative bottom-[190px] z-[-10]'
          src={picBand2} alt="picBand2" />
      </div>
      <div
        className='h-[350px] overflow-hidden'
      >
        <img
          className='relative bottom-[200px] z-[-10]'
          src={logoBandAlpha} alt="logoBandBlack" />
      </div>
      <div className='w-[60%] flex mx-auto'>
        <p className={`text-center leading-9 ${FontSize[20]}`}>
          ONE OK ROCK เป็นวงดนตรีร็อคสัญชาติญี่ปุ่นที่ก่อตั้งในปี 2548 และเปิดตัวในปี 2550
          <br />
          ONE OK ROCK ได้ปลูกฝังในหมู่วัยรุ่นด้วยการผสมผสานดนตรีอีโมและร็อคเข้ากับการแสดงสดที่น่าทึ่งวงนี้เปิดตัวในปี 2550 และก้าวขึ้นสู่จุดสูงสุดของความโดดเด่นทางดนตรี
          โดยแสดงบนเวทีตั้งแต่สถานที่แสดงสดและเทศกาลฤดูร้อนไปจนถึง Nippon Budokan อันโด่งดัง
          <br />
          การเดินทางของพวกเขาดำเนินต่อไปในขณะที่พวกเขาเอาชนะสนามกีฬากลางแจ้ง สนามกีฬา และสถานที่จัดงานโดมให้กับผู้ชมทั่วประเทศญี่ปุ่น
          <br /><br />
          นอกเหนือจากประเทศญี่ปุ่น พวกเขาได้ลงนามข้อตกลงกับค่ายเพลงระดับนานาชาติ เพื่อนำเพลงของพวกเขาไปสู่ขอบเขตใหม่ๆ และนำไปสู่การแสดงในสหรัฐอเมริกา ยุโรป และเอเชีย
          <br />
          ในปี 2022 วงได้เปิดตัว "Luxury Disease" และการทัวร์อเมริกาเหนือที่ประสบความสำเร็จตามมา ตามมาด้วยทัวร์โดมในญี่ปุ่นซึ่งประสบความสำเร็จโดยสิ้นเชิง จากนั้นวงได้เข้าร่วมกับ Muse ในการทัวร์อเมริกาและยุโรป และปัจจุบันมีกำหนดสิ้นสุดในปีนี้ด้วยอารีน่าทัวร์เอเชียที่ใหญ่ที่สุดจนถึงปัจจุบัน
        </p>
      </div>
      <div className='flex flex-col w-[80%] mx-auto pt-10 pb-10 gap-12'>
        <div className='h-[400px] flex justify-between items-center'>
          <div className='bg-red-400 h-[70%] w-[36%] rounded-[40px] '>

          </div>
          <div className='bg-blue-300 h-full w-[56%]'>

          </div>
        </div>
        <div className='h-[400px] flex justify-between items-center'>
          <div className='bg-blue-300 h-full w-[56%]'>

          </div>
          <div className='bg-red-400 h-[70%] w-[36%] rounded-[40px] '>

          </div>
        </div>
        <div className='h-[400px] flex justify-between items-center'>
          <div className='bg-red-400 h-[70%] w-[36%] rounded-[40px] '>

          </div>
          <div className='bg-blue-300 h-full w-[56%]'>

          </div>
        </div>
        <div className='h-[400px] flex justify-between items-center'>
          <div className='bg-blue-300 h-full w-[56%]'>

          </div>
          <div className='bg-red-400 h-[70%] w-[36%] rounded-[40px] '>

          </div>
        </div>
      </div>
    </div>
  )
}
