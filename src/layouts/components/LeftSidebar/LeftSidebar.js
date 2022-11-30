import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc, faChartSimple, faRadio, faMusic, faIcons, faStar } from '@fortawesome/free-solid-svg-icons';

import styles from './LeftSidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import images from '~/assets';
import mobileLogo from '~/assets/img/mobilelogo.png';
import logo from '~/assets/img/logo001.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function LeftSidebar() {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('logo')} to="/">
                <img src={logo} alt="logo" className={cx('logo-img')} />
                <img src={mobileLogo} alt="logo" className={cx('logo-img--mobile')} />
            </Link>

            <div className={cx('menu')}>
                <Menu>
                    <MenuItem icon={<FontAwesomeIcon icon={faCompactDisc} />} title="Khám Phá" to={'/'} />
                    <MenuItem icon={<FontAwesomeIcon icon={faChartSimple} />} title="Bảng Xếp Hạng" to={'/chart'} />
                    <MenuItem icon={<FontAwesomeIcon icon={faRadio} />} title="Radio" to={'/radio'} />
                    <MenuItem icon={<FontAwesomeIcon icon={faMusic} />} title="Nhạc Mới" to={'/newmusic'} />
                    <MenuItem icon={<FontAwesomeIcon icon={faIcons} />} title="Thể Loại" to={'/category'} />
                    <MenuItem icon={<FontAwesomeIcon icon={faStar} />} title="Top 100" to={'/top100'} />
                </Menu>
                <div className={cx('note')}>
                    <h4>THÔNG BÁO</h4> 
                    <p>1. Sản phẩm này là website thử nghiệm theo đề tài đồ án của sinh viên. 
                        <br/> 2. Sản phẩm này KHÔNG dùng cho mục đích thu lợi nhuận. 
                        <br/> 3. Mọi đề nghị hoặc yêu cầu gỡ nội dung bản quyền xin liên hệ qua mail.
                    </p>
                    <a href= "mailto:hoangduccanhhdc@gmail.com">Send Email</a> 
                </div>
            </div>
        </div>
    );
}

export default LeftSidebar;
