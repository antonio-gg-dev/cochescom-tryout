import { FC } from 'react'
import { Car } from '@/dtos/Car'
import styles from './FavoriteButton.module.scss'

interface FavoriteButtonProps {
  isFavorite: Car['isFavorite']
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({ isFavorite }) => {
  return <img
    className={ styles['favorite-button__icon'] }
    src={ isFavorite
      ? '/icons/heart-solid.svg'
      : '/icons/heart-regular.svg'
    }
    alt={ isFavorite
      ? 'Este vehículo está añadido a tus favoritos ¿Dejar de ser favorito?'
      : '¿Hacer favorito?'
    }
  />
}