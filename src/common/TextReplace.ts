// const TextReplace = () => {
// 	const texts = [
// 		<h1 key="header1" style={{ color: 'red' }}>
// 			Header 1
// 		</h1>,
// 		<h2 key="header2">glow</h2>,
// 		<h3 key="header3">Header 3</h3>,
// 	]
// 	const [currentIndex, setCurrentIndex] = useState(0)

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setCurrentIndex((prevIndex: number) => (prevIndex + 1) % texts.length)
// 		}, 3000)

// 		return () => clearInterval(interval)
// 	}, [texts])

// 	return (
// 		<div>
// 			{texts.map((text, index) => (
// 				<motion.div
// 					key={index}
// 					initial={{ opacity: 0, scale: 0.9 }}
// 					animate={{
// 						opacity: currentIndex === index ? 1 : 0,
// 						scale: currentIndex === index ? 1 : 0.9,
// 						transition: { delay: currentIndex === index ? 0 : 0.4 },
// 					}}
// 					exit={{ opacity: 0, scale: 0.8 }}
// 					transition={{ duration: 0.9 }}
// 					style={{ display: currentIndex === index ? 'block' : 'none' }}
// 				>
// 					{text}
// 				</motion.div>
// 			))}
// 		</div>
// 	)
// }
