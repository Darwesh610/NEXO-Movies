
import React from 'react'
import { useSelector } from 'react-redux'



export default function About() {

  let hamada = useSelector((x) => x)
  return (
    <div className='my-5'>
      <h1 className='title'>{hamada}   NOXE Movies Website</h1>
      <p className='overview'>Use NOXE to browse trending movies up to date and follow up about movies rate</p>
      <small className='overview'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, delectus dolorum accusamus quas labore magnam rem recusandae, voluptatem veniam odit quod nemo autem numquam possimus ex tempore assumenda, maxime sequi amet nisi? Ipsa, ut quae quos rerum placeat commodi quia aliquam vitae. Similique quia eligendi ratione ullam reprehenderit maxime delectus, molestias illum vero, blanditiis voluptates! Quidem veniam tempore quia repudiandae perferendis vitae fuga optio ex animi, accusantium harum aspernatur obcaecati libero cumque reprehenderit non nesciunt illum possimus eaque ullam delectus ipsum! Distinctio sit alias ratione eum saepe accusantium exercitationem deserunt, ipsum sunt, natus quisquam modi, doloribus molestias iure officia aut ab magni maxime sequi doloremque minima? Quidem totam blanditiis laborum nobis sit temporibus ipsa aspernatur veniam provident mollitia fugit autem aliquam rerum dicta explicabo, ut amet vero vitae. Ratione ut tempore tenetur dolorum voluptate, amet eligendi odio sequi natus. Quas, labore corporis, quibusdam dolorum doloremque laborum commodi modi voluptas maiores similique eaque unde suscipit corrupti dolor ipsum in molestiae impedit illo deserunt consequuntur explicabo repellendus recusandae eveniet? Praesentium tempora modi officia explicabo labore a! Doloremque, itaque ullam sapiente pariatur cupiditate modi repellendus eius unde ut. Veritatis quam amet quidem sed eum iste inventore error accusamus architecto, vitae, eos in nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nemo incidunt natus accusamus asperiores blanditiis! Placeat impedit sunt ex ipsa, quam accusamus dolore blanditiis ab error similique fuga itaque repellat vitae eveniet! Reprehenderit dolore tempora omnis sapiente error id quam. Libero unde beatae, corrupti quaerat ipsa nihil laudantium at saepe placeat blanditiis quos rerum, quae eaque ex labore, non nemo fugiat odio vitae! Dolorem laboriosam dolor fugit illo? Assumenda magni deleniti, ratione necessitatibus veritatis perspiciatis nam, quaerat quae rem dolores magnam illum iste ut veniam omnis similique vel, voluptatum corporis nisi error aperiam labore minus reprehenderit quod. Ipsa, esse suscipit.</small>
    </div>
  )
}
