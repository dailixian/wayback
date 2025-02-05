import React from 'react';

import {
    AboutThisApp,
    // AppTitleText,
    // BarChart,
    Gutter,
    // ListView,
    MapView,
    MapViewWrapper,
    MetadataPopup,
    MetadataQueryTask,
    MobileHeader,
    MobileFooter,
    ReferenceLayer,
    ReferenceLayerToggle,
    Sidebar,
    SearchWidget,
    ShareDialog,
    SwipeWidget,
    SaveAsWebMapDialog,
    SwipeWidgetToggleBtn,
    SettingDialog,
    SaveAsWebmapBtn,
    // SidebarToggleBtn,
    SwipeWidgetLayerSelector,
    // ShowLocalChangesCheckboxToggle,
    TilePreviewWindow,
    // Title4ActiveItem,
    WaybackLayer,
    HeadTags,
    AnimationPanel,
    AnimationModeToggleBtn,
    ZoomWidget
} from '..';
import { AppContext } from '../../contexts/AppContextProvider';
import { getServiceUrl } from '../../utils/Tier';

// import { MobileHide, Spacing } from '../SharedUI';

const AppLayout:React.FC = ()=> {

    const { onPremises } = React.useContext(AppContext);

    return (
        <>
            <HeadTags />

            <MobileHeader />

            <Gutter>
                <SaveAsWebmapBtn />

                <SwipeWidgetToggleBtn />

                <AnimationModeToggleBtn />
            </Gutter>

            <Sidebar>
                {/* <SidebarToggleBtn />

                <Spacing paddingLeft="1rem" paddingRight="1rem">
                    <MobileHide>
                        <AppTitleText />
                    </MobileHide>

                    <BarChart />

                    <Title4ActiveItem />

                    <ShowLocalChangesCheckboxToggle />
                </Spacing>

                <ListView /> */}
            </Sidebar>

            <MapViewWrapper>
                <SwipeWidgetLayerSelector targetLayer="leading" />

                <MapView>
                    <WaybackLayer />

                    <ReferenceLayer />

                    <TilePreviewWindow />

                    <MetadataPopup />

                    <MetadataQueryTask />

                    <SwipeWidget />

                    <AnimationPanel />

                    <ReferenceLayerToggle />

                    <SearchWidget
                        portalUrl={getServiceUrl('portal-url')}
                        // position={'top-left'}
                    />

                    <ZoomWidget />
                </MapView>

                <SwipeWidgetLayerSelector targetLayer="trailing" />
            </MapViewWrapper>

            <SaveAsWebMapDialog />

            <SettingDialog />

            { !onPremises && <ShareDialog /> }

            <AboutThisApp />

            <MobileFooter />
        </>
    );
};

export default AppLayout;
