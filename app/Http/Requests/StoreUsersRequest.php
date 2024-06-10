<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUsersRequest extends FormRequest
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
            'IdNumber' => 'required|string|unique:users,IdNumber',
            'Name' => 'required|string',
            'Email' => 'required|string|email|unique:users,Email',
            'Position' => 'required|string',
            'Password' => 'required|min:8|string'
        ];
    }
}
