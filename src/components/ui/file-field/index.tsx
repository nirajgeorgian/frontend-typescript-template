import React from 'react'
import Dragger, { DraggerProps } from 'antd/lib/upload/Dragger'
import Icon from 'antd/lib/icon'
import { UploadChangeParam } from 'antd/lib/upload'
import { FieldProps } from 'formik/dist/Field'

interface ICreateAntFilesFieldProps extends DraggerProps, FieldProps {}
export const CreateAntFilesField: React.FC<ICreateAntFilesFieldProps> = ({ form, field }) => {
	const fileProps = {
		name: field.name,
		beforeUpload: () => false,
		onChange: (files: UploadChangeParam) => {
			form.setFieldValue(field.name, [...files.fileList])
		},
		multiple: true
	}

	return (
		<Dragger {...fileProps}>
			<p className="ant-upload-drag-icon">
				<Icon type="inbox" />
			</p>
			<p className="ant-upload-text">Click or drag file to this area to upload</p>
			<p className="ant-upload-hint">
				Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
			</p>
		</Dragger>
	)
}
