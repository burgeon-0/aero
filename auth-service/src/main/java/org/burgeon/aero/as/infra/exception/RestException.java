package org.burgeon.aero.as.infra.exception;

import lombok.Data;

/**
 * @author Sam Lu
 * @date 2021/11/30
 */
@Data
public class RestException extends RuntimeException {

    private ErrorCode errorCode;

    public RestException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }

}
