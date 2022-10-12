import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import SideMenu from '../comp/SideMenu';
import { AuthContext } from '../context/authContext';
import cover from '../resources/cover.jpeg';
import { DeleteIcon, EditIcon } from '../resources/Icons'
const Single = () => {
    const {currentUser} = useContext(AuthContext)
    let { id } = useParams()
    id = id.slice(-1);
    return (
        <div className='single container'>
            <div className="content">
                <img className='thumbnail' src={cover} alt="" />
                <div className="content-body">
                    <div className="author">
                        <Link to={`/author/2`} > <img src="https://api.lorem.space/image/face?w=150&h=150" alt="" /></Link>
                        <div>
                            <h2><Link to={`/author/2`} >John doe</Link></h2>
                            <span>Posted 2 days ago</span>
                        </div>
                       {currentUser && <div className="action">
                            <Link to={`/write/?id=2`} className='edit' type="submit"> {EditIcon} </Link>
                            <button className='del' type="submit"> {DeleteIcon} </button>
                        </div>}
                    </div>
                    <h1 className='post-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, hic!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim modi officia qui. Consequuntur dolore accusamus necessitatibus? Praesentium accusantium libero harum odio velit, eveniet fugiat dolore reprehenderit nostrum doloremque ut odit!
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus dolorem eveniet tempore enim? Aliquid debitis quod totam? Non nihil praesentium iure. Eveniet facere rerum corrupti sapiente saepe molestias animi reprehenderit dicta culpa earum natus error itaque magni vitae commodi magnam doloribus tempora delectus, alias quidem consequatur? Sunt repellat quis excepturi, ad, architecto minima quaerat adipisci pariatur reprehenderit sapiente culpa quibusdam fugit dolor praesentium, vitae maiores asperiores possimus totam consectetur quo. Ratione in repellat laborum ipsum. Adipisci fugiat rerum mollitia consequuntur nisi explicabo, quo neque incidunt, tempora natus nesciunt molestiae possimus deserunt? Tempora, impedit. Nisi facilis dignissimos tenetur, quia non vero!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores fugiat ullam, autem rerum assumenda veniam quas commodi rem illum voluptas numquam iste itaque explicabo quae error saepe. Consequuntur hic aut impedit eos blanditiis explicabo facilis a nihil nisi reiciendis sed vel quas enim corrupti, laboriosam at, quidem error nesciunt aliquid libero pariatur doloribus. Molestias autem a possimus saepe quidem hic, exercitationem ratione odio libero voluptates adipisci expedita dolor repellendus eaque voluptatem et enim! Quaerat, quo reiciendis? Magnam earum, at sed repellendus ea voluptate maxime ab doloribus eligendi optio facere aut. Reiciendis in dignissimos nihil ipsam aliquam deleniti quibusdam commodi eum. Iste nesciunt repellat commodi voluptatibus necessitatibus tempore. Similique, dolorum laboriosam! Adipisci incidunt quisquam voluptatem aliquid placeat ea perspiciatis quaerat magnam ad dolore? Eaque, autem minima? Veritatis dolore hic nostrum. Ab perferendis quas mollitia reprehenderit eos sequi facere ipsa nihil quos asperiores animi est voluptate voluptas at, doloremque sed, deleniti nisi fuga sit nesciunt veritatis aut odit. Voluptatibus saepe, voluptates nesciunt repellat ducimus iure, ea dignissimos nobis ipsam quibusdam dicta? Magni a sint asperiores error numquam sit temporibus omnis cupiditate reprehenderit, minus, consectetur impedit dolore! Minus similique deleniti saepe consequuntur inventore hic qui at quam necessitatibus veniam harum, labore debitis dolorem.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, omnis explicabo voluptas eligendi delectus sunt iste corrupti, sequi nisi eos minima ratione. Laudantium repellendus ipsam voluptas blanditiis iusto? Adipisci possimus nihil illo, repellat tempore dignissimos, inventore, magni dolor repudiandae natus velit. Sint dolore omnis non excepturi molestias nobis quam ipsam eius adipisci harum quibusdam voluptatem deserunt quasi porro dolor id, repellat ad reiciendis a! Aliquid, quae quas voluptate in, deserunt officia tenetur voluptatibus obcaecati at labore quis laboriosam quidem ex necessitatibus eaque iusto deleniti illo soluta eveniet saepe accusantium accusamus sunt aliquam! Nemo molestias ut sit optio eum ratione consectetur iste omnis quibusdam. Suscipit debitis laudantium harum sit? Eaque, maiores excepturi praesentium consequuntur qui ducimus maxime culpa doloremque? Quidem unde necessitatibus tempora optio molestiae asperiores laudantium cum, ratione ad in.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione tempora rerum eius recusandae voluptatibus neque sed harum, ducimus asperiores sapiente nisi voluptates fuga nemo magni modi! Culpa molestiae ratione quos vero nemo natus molestias consequatur consectetur incidunt optio recusandae, animi doloribus nulla iure amet? Vel eius, aliquid reprehenderit aliquam quod architecto. Cupiditate cum perferendis error fugit quia veritatis neque itaque illum eum quaerat, quo atque non assumenda harum, pariatur velit, tempore ab! Fugit dolore harum, itaque esse animi saepe nisi! Nulla est ipsum laudantium, accusantium, doloremque facere eveniet, itaque laborum necessitatibus commodi eum. Porro dolor tenetur eos rerum obcaecati, aperiam blanditiis ullam at asperiores autem quidem amet deserunt soluta! Voluptatem minus nulla hic delectus vero dolore dignissimos ea quidem voluptatibus pariatur ducimus tenetur soluta, repellat ad reiciendis dolorum consequatur illum eligendi beatae aliquid et, sint reprehenderit qui. Veritatis reiciendis beatae saepe accusantium labore? Necessitatibus eaque tempora exercitationem eos ullam vero sed ab ipsum, illo sint cumque odit ex accusamus veritatis, quibusdam, maxime voluptates voluptas iste incidunt error tenetur sapiente fugit. Est, facilis saepe eius placeat omnis commodi repudiandae quos repellendus? Est nemo laborum, tempora praesentium soluta odit excepturi suscipit facere error quasi eos consequatur voluptates aliquid saepe dolorum eius, corporis consequuntur exercitationem? Alias saepe ad dolore beatae nesciunt dolorem eius quasi blanditiis harum. Laudantium, nostrum. Natus rem magnam maxime nesciunt saepe qui laborum, voluptas, consequatur neque cumque earum. Doloribus!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dolorem commodi maxime numquam non esse saepe, fuga pariatur ratione, reiciendis sapiente asperiores ut porro harum quae repudiandae aliquid expedita a blanditiis illo quos cum. Omnis ullam nulla velit culpa sit, quis vero dolorem reprehenderit neque possimus veniam, optio maxime corrupti esse sint. Quis a commodi natus veniam labore fugit. Atque recusandae distinctio voluptatum repellat expedita maxime ex asperiores quasi doloribus enim iure adipisci vel ipsa dignissimos sed impedit illum molestias consequatur, autem corporis deserunt nam quis eveniet sunt! Omnis tempore cumque quam labore natus temporibus nemo aperiam necessitatibus laudantium ad.</p>
                </div>
            </div>
            <div className="menu">
                <SideMenu />
            </div>
        </div>
    );
};

export default Single;