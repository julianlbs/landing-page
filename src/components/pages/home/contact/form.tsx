import { Field, Form, Formik, useField } from "formik";
import { FocusEvent, useState } from "react";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import { E164Number } from "libphonenumber-js/types";
import { useForm } from "@formcarry/react";
import { Dialog } from "@headlessui/react";

const formSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too short!")
		.max(60, "Too long!")
		.required("Required!"),
	email: Yup.string().email("Invalid email").required("Required!"),
	phone: Yup.string().optional(),
	message: Yup.string()
		.min(5, "Too short!")
		.max(320, "Too long!")
		.required("Required!"),
});

export default function ContactForm() {
	const [modalOpen, setModalOpen] = useState(false);
	const { state, submit } = useForm({
		id: "SyKINoJoj",
	});

	return (
		<>
			<Dialog
				open={modalOpen}
				onClose={() => setModalOpen(false)}
				className="fixed bottom-4 right-5 bg-slate-100 dark:bg-gray-700 p-4 rounded-md"
			>
				<Dialog.Panel className="flex flex-col">
					<Dialog.Title className="text-primary">Message sent!</Dialog.Title>
					<Dialog.Description>
						Thank you! I received your message.
					</Dialog.Description>
					<button
						className="btn btn-info self-end mt-4"
						onClick={() => setModalOpen(false)}
					>
						Close
					</button>
				</Dialog.Panel>
			</Dialog>

			<h3 className="text-secondary">Or through the form below</h3>
			<Formik
				initialValues={{ name: "", email: "", phone: "", message: "" }}
				validationSchema={formSchema}
				// onReset={(values) => {values.email = ""; values.name = ""; values.phone = ""; values.message = ""}}
				onSubmit={(values) => {
					console.log(values);
					setModalOpen(!modalOpen);
				}}
			>
				{({ errors, touched }) => (
					<Form className="flex flex-col gap-2 w-80">
						<div>
							<span className="text-secondary">Name *</span>
							<Field
								className="px-2 py-1 rounded-md w-full"
								name="name"
								placeholder="Name"
							/>
							{errors.name && touched.name ? (
								<div className="text-error">{errors.name}</div>
							) : null}
						</div>
						<div>
							<span className="text-secondary">Email *</span>
							<Field
								className="px-2 py-1 rounded-md w-full"
								name="email"
								placeholder="email@email.com"
							/>
							{errors.email && touched.email ? (
								<div className="text-error">{errors.email}</div>
							) : null}
						</div>
						<div>
							<span className="text-secondary">Phone </span>
							<PhoneField name="phone" />
						</div>
						<div>
							<span className="text-secondary">Message *</span>
							<Field
								className="px-2 py-1 rounded-md h-32 w-full"
								name="message"
								as="textarea"
								placeholder="Any question, pricing or project idea? Send me a message!"
							/>
							{errors.message && touched.message ? (
								<div className="text-error">{errors.message}</div>
							) : null}
						</div>
						<span>* Required fields</span>
						<button className="btn btn-primary mt-2">Send</button>
					</Form>
				)}
			</Formik>
		</>
	);
}

const PhoneField = ({ name }: { name: string }) => {
	const [field, meta, helpers] = useField(name);

	return (
		<>
			<PhoneInput
				className="flex gap-2"
				placeholder="Enter phone number"
				value={meta.value}
				autoComplete="tel"
				onChange={helpers.setValue}
			/>
			{meta.error && meta.touched ? (
				<div className="text-error">{meta.error}</div>
			) : null}
		</>
	);
};
