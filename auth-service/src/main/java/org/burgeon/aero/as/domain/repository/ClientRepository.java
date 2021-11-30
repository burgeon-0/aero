package org.burgeon.aero.as.domain.repository;

import org.burgeon.aero.as.domain.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

/**
 * @author Sam Lu
 * @date 2021/11/26
 */
public interface ClientRepository extends JpaRepository<Client, UUID> {
}
