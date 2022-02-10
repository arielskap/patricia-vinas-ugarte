import Image from "next/image"
import Link from "next/link"
import LovePicture from "../../public/android-chrome-512x512.png"

const Page404 = () => {
  return (
		<div className="bg-white min-h-screen flex flex-col lg:relative">
			<div className="flex-grow flex flex-col">
				<main className="flex-grow flex flex-col bg-white">
					<div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
						<div className="flex-shrink-0 pt-10 sm:pt-16">
							<Link href="/">
								<a className="inline-flex">
									<span className="sr-only">Workflow</span>
									<div className="h-12 w-12">
										<Image
											quality={100}
											src={LovePicture}
											alt="Love"
										/>
									</div>
								</a>
							</Link>
						</div>
						<div className="flex-shrink-0 my-auto py-16 sm:py-32">
							<p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>
							<h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
								Page not found
							</h1>
							<p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
							<div className="mt-6">
								<Link href="/">
									<a className="text-base font-medium text-indigo-600 hover:text-indigo-500">
										Go back home<span aria-hidden="true"> &rarr;</span>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</main>
			</div>
			<div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<div className="absolute inset-0 h-full w-full">
					<Image objectFit="cover" layout="fill" quality={100} src="https://images.unsplash.com/photo-1470847355775-e0e3c35a9a2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1825&q=80" alt="Desert" />
				</div>
			</div>
		</div>
  )
}

export default Page404