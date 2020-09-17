import Button from '@src/components/Button';
import Container, { Body } from '@src/components/Container';
import Counter from '@src/components/Counter';
import Header from '@src/components/Header';
import Icon from '@src/components/Icon';
import TabContent, { tabDataType } from '@src/components/TabContent';
import Text from '@src/components/Text';
import Wrapper from '@src/components/Wrapper';
import { Colors, Sizes } from '@src/utils/constants';
import { ScreenProps } from '@src/utils/types';
import React, { useState } from 'react';
import { View } from 'react-native';
import { fromBottom, fromRight } from 'react-navigation-transitions';

const Course = ({ navigation }: ScreenProps) => {
	const [isPaid, setIsPaid] = useState(false)
	const tabData: tabDataType = [
		{
			tabName: "Information", tabData: <Body style={{ marginTop: Sizes.base }} scrollable>
				<Wrapper>
					<Counter counter="16" title="Lessons" />
					<Counter counter="10" title="Experiences" />
					<Counter counter="5k" title="Students" />
				</Wrapper>
				<Text>{`				Sint adipisicing excepteur irure elit irure. Voluptate aute sit est esse labore laborum eiusmod dolor cupidatat sint veniam. Magna eiusmod sint quis dolor minim esse sit deserunt aliqua eiusmod exercitation duis. Duis proident magna Lorem dolor est mollit minim amet.\n
				Proident enim aliquip laboris amet irure non ad anim fugiat do. Et non proident dolor sunt incididunt. Elit enim magna excepteur adipisicing aliqua aliquip ad dolor sit ullamco proident. Fugiat voluptate est exercitation reprehenderit nisi culpa proident labore. Ipsum velit adipisicing laborum ex ut aliquip nisi enim pariatur nostrud occaecat nostrud. Veniam anim minim consectetur ea. Et qui cillum deserunt commodo qui.`}</Text>
				{isPaid && <Button>CONTINUE THE LESSON</Button>}
			</Body>
		},
		{
			tabName: "Lesson", tabData: <Body style={{ marginTop: Sizes.base }} scrollable>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => <Wrapper style={{ paddingVertical: Sizes.secondary }} alignItems="flex-start">
					<Text style={{ width: Sizes.bodyPadding / 1.5 }}>{i}</Text>
					<View style={{ flex: 1 }}>
						<Text>Lorem ipsum dolor sit amet</Text>
						<Text color="grey">22:00 Minutes</Text>
					</View>
					<Button onPress={() => i < 3 && navigation.navigate('CoursePlay', { transition: fromRight })} bColor={i < 3 ? 'success' : 'danger'} style={{
						width: Sizes.heading4,
						height: Sizes.heading4,
						justifyContent: 'center',
						alignItems: 'center',
						borderRadius: Sizes.bodyTop,
						padding: Sizes.secondary
					}}>
						<Icon color="light" name="play" />
					</Button>
				</Wrapper>)}
			</Body>
		},
		{
			tabName: "Review", tabData: <Body style={{ marginTop: Sizes.base }} scrollable>
				{[1, 2, 3].map((_, i) => <Wrapper style={{ marginBottom: Sizes.base }} key={i.toString()}>
					<View style={{ flex: .9 }}>
						<Text size="heading6">Julian Smith</Text>
						<Text color="grey">Culpa nulla consectetur est ullamco deserunt excepteur velit est et anim labore.</Text>
					</View>
					<View>
						<Icon color="gold" solid name="star" />
						<Text>4.7</Text>
					</View>
				</Wrapper>)}
				<Button>SUBMIT REVIEW FOR THIS COURSE</Button>
			</Body>
		},
	]
	return <Container>
		<Header barStyle="light-content" backgroundColor="primary" color="light" onPressLeft={() => navigation.goBack()} />
		<Body noMargin noPadding>
			<View style={{
				backgroundColor: Colors.primary,
				paddingBottom: Sizes.bodyTop,
				paddingHorizontal: Sizes.bodyPadding
			}}>
				<Text color="light" size="heading3">Mathematic - Algebra Grade 6</Text>
				<Wrapper>
					<Text color="light">by George Smith</Text>
					<View>
						<Icon color="gold" solid name="star" />
						<Text color="light">4.7</Text>
					</View>
				</Wrapper>
			</View>
			{!isPaid && <Button onPress={() => navigation.navigate('Payment', { transition: fromBottom })} withMargin>TAKE THIS COURSE FOR $10</Button>}
			<TabContent tabMenuProps={{
				style: {
					paddingHorizontal: Sizes.bodyPadding
				}
			}} data={tabData} />
		</Body>
	</Container>
}

export default Course