<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CPDCertificate extends Model
{
    use SoftDeletes;

    protected $table = 'cpdcertificates';

    protected $fillable = [
        'course_id',
        'name',
        'filename',
        'path',
        'extension',
        'user_id'
    ];

    public function course() {
      return $this->belongsTo('App\Course');
    }
}
