import React from 'react';
import { Form, Input, Button } from 'antd';
import './InputText.css'
  
function InputText(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                props.onSubmit(values)
                props.form.resetFields()
            }
        });
    }
    const { getFieldDecorator } = props.form;
    return (
        <div className="chatbot__input-text">
            <Form layout="inline" onSubmit={handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('msg')(<Input name="msg" placeholder="Your message" />)}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Send</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Form.create({ name: 'input-text-form' })(InputText);