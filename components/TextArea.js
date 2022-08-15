import React from "react";
import { Field, ErrorMessage, FastField } from "formik";
export default function TextArea(props) {
	const { name, className, ringcolor, label, ...rest } = props;
	return (
		<div>
			<div>
				<label
					htmlFor={props.name}
					className={`leading-7 text-sm text-gray-100 ${props.labelclassName}`}
				>
					{label}
				</label>
			</div>
			<Field
				className={`focus:ring-4 focus:ring-opacity-50 focus:${ringcolor} focus:transition-all outline-none focus:fade-in-out ${className}`}
				as="textarea"
				id={name}
				name={name}
				{...rest}
			/>
			<div id="error" className="text-red-500">
				<div className="my-2 text-red-500">
					<ErrorMessage className="" name={name}>
						{(msg) => {
							return (
								<div className="">
									<p className="p-1 text-center text-red-500 bg-white ">
										{msg}
									</p>
								</div>
							);
						}}
					</ErrorMessage>
				</div>
			</div>
		</div>
	);
}
