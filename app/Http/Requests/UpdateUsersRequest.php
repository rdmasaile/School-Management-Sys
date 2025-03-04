<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUsersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'Id' => 'required|string',
            'Name' => 'required|string',
            'Email' => 'required|string|email',
            'PhoneNumber' => 'required|string',
            'Password' => 'required|string|min:8'
        ];
    }
}
