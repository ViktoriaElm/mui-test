import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import { Fragment } from 'react';

function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default function BackToTop(props) {
    return (
        <Fragment>
            <CssBaseline />
            <Toolbar id="back-to-top-anchor" />
            <Container>
                <Box sx={{ my: 2 }}>
                    <Typography variant="h4" gutterBottom>
                        Эффективные методы и советы по чистке ковров, диванов и основательной уборке дома:
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Cохраняйте свой интерьер свежим и безупречным
                    </Typography>
                    <p> Чистка ковров, диванов и основательная уборка дома являются важными аспектами поддержания свежести и безупречности интерьера. Однако, многие люди сталкиваются с трудностями при выполнении этих задач. В данной статье мы представим эффективные методы и советы, которые помогут вам справиться с этими задачами.</p>

                    <p>1. Чистка ковров:
                        - Регулярная чистка: Рекомендуется регулярно проводить пылесос по ковру, чтобы удалить пыль, грязь и остатки.
                        - Использование специальных средств: Для удаления пятен и запахов на ковре можно использовать специальные чистящие средства. Перед применением следует проверить их на небольшом участке ковра, чтобы убедиться, что они не повредят материал.
                        - Профессиональная чистка: Рекомендуется периодически обращаться к профессиональным компаниям для проведения глубокой чистки ковров. Это поможет удалить глубокие загрязнения и освежить внешний вид ковра.</p>

                    <p>2. Чистка диванов:
                        - Пылесос: Регулярное пылесосение дивана поможет удалить пыль и грязь с его поверхности.
                        - Использование чистящих средств: Для удаления пятен и запахов на диване можно использовать специальные чистящие средства. Перед использованием следует протестировать их на небольшом участке дивана, чтобы убедиться, что они не вызывают повреждений или изменений цвета материала.
                        - Профессиональная чистка: В случае глубоких пятен и загрязнений рекомендуется обратиться к профессиональным компаниям для проведения глубокой чистки дивана.</p>

                    <p>3. Генеральная уборка дома:
                        - Планирование: Создайте план уборки, чтобы эффективно распределить задачи и время. Разделите уборку на отдельные этапы, такие как уборка ванной комнаты, кухни, спален и т.д.
                        - Организация: Перед уборкой соберите все необходимые инструменты и материалы, чтобы избежать постоянного перемещения в поисках нужных вещей.
                        - Пылесос и моп: Используйте пылесос для удаления пыли и грязи с полов, ковров и мебели. Затем протрите полы мопом, чтобы убрать остатки пыли и придать им блеск.
                        - Удаление пятен: Для удаления пятен на поверхностях, таких как столы, стулья и стены, используйте специальные чистящие средства или смесь воды и уксуса.
                        - Окна: Не забудьте протереть окна внутри и снаружи, чтобы они были чистыми и прозрачными.</p>

                    <p>В заключение, регулярная чистка ковров, диванов и основательная уборка дома являются важными задачами для поддержания свежести и безупречности интерьера. Следуя эффективным методам и советам, вы сможете легко справиться с этими задачами и наслаждаться чистотой и комфортом в своем доме.</p>

                </Box>
            </Container>
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </Fragment>
    );
}