import React from 'react'
import me from './Me.jpg'
import { CardImg, Card } from 'reactstrap'
import { useState } from 'react';
export const Name = () => {
    return (
        <div>
            
            <p>THANASAN RUANGCHAI<br />
            ประวัติ    ชื่อ-นาสกุล        :thanasan ruangchai    อายุ :22 เกณ ผ่านจ้า
            </p>
        </div>
    )

}
export const Skill = () => {
    const [greeting, setGreeting] = useState("hello")
    return (
        <div>
            <p>Skill
            <br /><br />Adobe Photoshop<br />|||||||||||||
            <br /><br />Adobe After<br />||||
            <br /><br />Adobe Flash<br />||||||||
            </p>
            <p>{greeting}</p>
            <input placeholder='Write Me' onChange={e => setGreeting(e.target.value)}>
            </input>


        </div>

    )
}
export const Desc = () => {
    return (
        <div>
            <p>อธิบายเกี่ยวกับตัวเอง<br />
            การทำให้บุคคลอื่นเข้าใจความจริง ความสัมพันธ์หรือปรากฏการณ์ต่างๆทั้งที่เป็นปรากฏการณ์ทางสังคม และปรากฏการณ์ทางธรรมชาติ

ปรากฏการณ์ทางสังคม หมายถึง สิ่งต่างๆ ที่มนุษย์สร้างขึ้น หรือทำให้ปรากฏการณ์ทางการณ์ขึ้นรวมทั้งกิจกรรมต่างๆ ที่มนุษย์เกี่ยวข้องอยู่ ส่วนปรากฏการณ์ทางธรรมชาตินั้น หมายถึง สิ่งที่ เกิดขึ้นเองตามธรรมชาติ มนุษย์มิได้ทำให้เกิดขึ้น การปราบแมลงที่มาทำลายพืชถือว่าเป็นปรากฏการณ์ทางสังคม แต่การระบาดของแมลงเป็นปรากฏการณ์ทางธรรมชาติ ปรากฏการณ์ทางสังคมและทางธรรมชาติ อาจผสมรวมอยู่ด้วยกันได้

  ตามที่กล่าวมาข้างต้น จะเห็นว่า ขอบเขตของการอธิบายกว้างขวางมาก หนังสือ วิชาการต่างๆที่นักเรียนได้เรียนมาแล้วและที่จะเรียนต่อๆ ไป ส่วนใหญ่ก็เป็นการอธิบายเรื่องใด เรื่องหนึ่ง แท้ที่จริงศาสตร์ทุกสาขาก็คือผลแห่งความพยายามของมมนุษย์ที่จะอธิบายปรากฏการณ์ทางสังคม และปรากฏการณ์ทางธรรมชาตินั่นเอง</p>

        </div>

    )
}
export const Exp = () => {
    return (
        <p>
            ประสบการ
        </p>

    )
}
export const Profile = () => {
    return (
        <div>
            <Card style={{width:300}}>
                <CardImg top  height="300px" src={me} alt="Card image cap" />
            </Card>
        </div>

    )
}