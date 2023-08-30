// src/common/request-logging.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { logger } from 'src/utils/logger';

export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const { method, originalUrl, ip } = req;
  const userAgent = req.get('user-agent') || '';
  logger.info(`[${new Date().toISOString()}] ${method} ${originalUrl} - ${ip} - ${userAgent}`);
  next();
};
