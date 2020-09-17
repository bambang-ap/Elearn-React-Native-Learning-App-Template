import Container, { Body } from '@src/components/Container';
import Header, { IconHeader } from '@src/components/Header';
import Icon from '@src/components/Icon';
import Text from '@src/components/Text';
import Wrapper from '@src/components/Wrapper';
import Constants, { Colors, Images, Sizes } from '@src/utils/constants';
import { ScreenProps } from '@src/utils/types';
import React from 'react';
import { Image, ImageBackground, View } from 'react-native';

const CoursePlay = ({ navigation }: ScreenProps) => {
	return <Container>
		<Header backgroundColor="transparent" color="light" absolute onPressLeft={() => navigation.goBack()} />
		<ImageBackground style={{ width: '100%', height: Constants.MAX_HEIGHT / 3 }} source={Images.emc2}>
			<View style={{
				padding: Sizes.bodyTop,
				backgroundColor: Colors.blackTransparent,
				flex: 1,
				justifyContent: 'flex-end',
				alignItems: 'flex-end'
			}}>
				<IconHeader color="light" name="expand" />
			</View>
		</ImageBackground>
		<Body noPadding scrollable>
			<View style={{ paddingHorizontal: Sizes.bodyPadding }}>
				<View style={{ marginTop: Sizes.bodyTop }}>
					<Wrapper justifyContent="center">
						<Icon color="primary" name="step-backward" iconSize="heading4" />
						<Icon color="primary" style={{ marginHorizontal: Sizes.base }} name="pause-circle" solid iconSize="heading2" />
						<Icon color="primary" name="step-forward" iconSize="heading4" />
					</Wrapper>
					<Text style={{ marginVertical: Sizes.bodyTop }} align="center">12:00 / 22:00</Text>
				</View>
				<Text>1. Ipsum reprehenderit excepteur aliqua consequat occaecat tempor ex est aliqua proident ad. Do elit cupidatat aliquip ad anim proident. Eiusmod deserunt mollit sunt cupidatat culpa.</Text>
				<Text>Ipsum reprehenderit excepteur aliqua consequat occaecat tempor ex est aliqua proident ad. Do elit cupidatat aliquip ad anim proident. Eiusmod deserunt mollit sunt cupidatat culpa.</Text>
			</View>
			<Text style={{ padding: Sizes.bodyTop, marginHorizontal: Sizes.bodyTop, borderRadius: Sizes.secondary, backgroundColor: Colors.greySoft }}>Ipsum reprehenderit excepteur aliqua consequat occaecat tempor ex est aliqua proident ad. Do elit cupidatat aliquip ad anim proident. Eiusmod deserunt mollit sunt cupidatat culpa.</Text>
			<View style={{ paddingHorizontal: Sizes.bodyPadding }}>
				<Text>Ipsum reprehenderit excepteur aliqua consequat occaecat tempor ex est aliqua proident ad. Do elit cupidatat aliquip ad anim proident. Eiusmod deserunt mollit sunt cupidatat culpa.</Text>
			</View>
		</Body>
	</Container>
}

export default CoursePlay